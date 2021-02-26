package com.example.java.controller;

import com.google.cloud.vision.v1.*;
import com.google.protobuf.ByteString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;


@RestController
public class TransactionController {


    @GetMapping(value = "/liveness")
    public String liveness() {
        return "OK";
    }

    @Autowired
    TransactionServiceImpl transactionService;


    @GetMapping(value = "/getTransactionByAccountNumber/{account-number}")
    public List<Transaction> getByAccountNumber(@PathVariable(value = "account-number") String accountNumber) {
        List list = transactionService.findByAccountNumber(accountNumber);
        Collections.sort(list, new Sortbyroll());
        return list;
    }

    @GetMapping(value = "/getLatestTransaction/{account-number}")
    public Optional<Transaction> getLatestTransactionByAccNum(@PathVariable(value = "account-number") String accountNumber) {
        return findLatestTransaction(accountNumber);
    }

    @RequestMapping(value = "/createTransaction", method = RequestMethod.POST)
    public String create(@RequestBody Transaction currentTransaction) throws IOException {

        Optional<Transaction> previousTransaction = findLatestTransaction(currentTransaction.getAccountNumber());

        if (previousTransaction.isPresent()) {
            updateTransaction(currentTransaction, previousTransaction.get());
        } else {
            currentTransaction.setBalance(currentTransaction.getCreditDebitAmount());
        }

        System.out.println("Account number is " + currentTransaction.getAccountNumber());
        //todo; code for creating transaction

        boolean isAngry = isAngryURL(currentTransaction.getFaceUrl());
        //boolean isAngry = isAngryGCS();

        if (isAngry) {
            //todo: code for sending a mail
            System.out.println("transaction pending mail sent");

            //SMTP
            //GCP mail API

            return "transaction pending mail sent";
        } else {
            System.out.println("transaction created");
            //todo : persistence in table
            //  currentTransaction.setTransactionId(new Date().getTime());
            transactionService.create(currentTransaction);
            return "Transaction is created.";
        }

    }


    public static boolean isAngryGCS() throws IOException {
        List<AnnotateImageRequest> requests = new ArrayList<>();

       // String gcsPath = "gs://gcp-hackathon-demo-project/657575.jpg";
        //String gcsPath = "gs://gcp-hackathon-demo-project/angry.jpeg";
        String gcsPath = "gs://alphahex-hackathon-bucket/657575.jpg";


        ImageSource imgSource = ImageSource.newBuilder().setGcsImageUri(gcsPath).build();
        Image img = Image.newBuilder().setSource(imgSource).build();
        Feature feat = Feature.newBuilder().setType(Feature.Type.FACE_DETECTION).build();

        AnnotateImageRequest request =
                AnnotateImageRequest.newBuilder().addFeatures(feat).setImage(img).build();
        requests.add(request);

        List<String> angryReactionList = Arrays.asList("POSSIBLE", "LIKELY", "VERY_LIKELY");


        boolean isAngry = false;

        try (ImageAnnotatorClient client = ImageAnnotatorClient.create()) {
            BatchAnnotateImagesResponse response = client.batchAnnotateImages(requests);
            List<AnnotateImageResponse> responses = response.getResponsesList();

            for (AnnotateImageResponse res : responses) {
                if (res.hasError()) {
                    System.out.format("Error: %s%n", res.getError().getMessage());
                }

                for (FaceAnnotation annotation : res.getFaceAnnotationsList()) {
                    System.out.format(
                            "anger: %s%njoy: %s%nsurprise: %s%nposition: %s",
                            annotation.getAngerLikelihood(),
                            annotation.getJoyLikelihood(),
                            annotation.getSurpriseLikelihood(),
                            annotation.getBoundingPoly());
                }
                isAngry = angryReactionList.contains(res.getFaceAnnotationsList().get(0).getAngerLikelihood().name());
            }
            return isAngry;
        }
    }

    public Optional<Transaction> findLatestTransaction(String accountNumber) {
        return transactionService.findByAccountNumber(accountNumber).stream().
                max(Comparator.comparing(Transaction::getTransactionId));


    }

    @GetMapping(value = "/getallTransactions")
    public Collection<Transaction> getAll() {
        return transactionService.findAll();
    }

    private void updateTransaction(Transaction currentTransaction, Transaction previousTransaction) {
        System.out.println("inside update Transaction");
        currentTransaction.setBalance(currentTransaction.getCreditDebitAmount() + previousTransaction.getBalance());


    }

    class Sortbyroll implements Comparator<Transaction> {
        // Used for sorting in ascending order of
        // roll number
        public int compare(Transaction a, Transaction b) {
            return (int) (a.getTransactionId() - b.getTransactionId());
        }
    }

    public static boolean isAngryURL(String url) throws IOException {
        List<AnnotateImageRequest> requests = new ArrayList<>();


        String base64Image = url.split(",")[1];
        byte[] imageByteArray = java.util.Base64.getMimeDecoder().decode(base64Image);


        ByteString imgBytes = ByteString.copyFrom(imageByteArray);

        Image img = Image.newBuilder().setContent(imgBytes).build();
        Feature feat = Feature.newBuilder().setType(Feature.Type.FACE_DETECTION).build();

        AnnotateImageRequest request =
                AnnotateImageRequest.newBuilder().addFeatures(feat).setImage(img).build();
        requests.add(request);

        List<String> angryReactionList = Arrays.asList("POSSIBLE", "LIKELY", "VERY_LIKELY");


        boolean isAngry = false;

        try (ImageAnnotatorClient client = ImageAnnotatorClient.create()) {
            BatchAnnotateImagesResponse response = client.batchAnnotateImages(requests);
            List<AnnotateImageResponse> responses = response.getResponsesList();

            for (AnnotateImageResponse res : responses) {
                if (res.hasError()) {
                    System.out.format("Error: %s%n", res.getError().getMessage());
                }

                for (FaceAnnotation annotation : res.getFaceAnnotationsList()) {
                    System.out.format(
                            "anger: %s%njoy: %s%nsurprise: %s%nposition: %s",
                            annotation.getAngerLikelihood(),
                            annotation.getJoyLikelihood(),
                            annotation.getSurpriseLikelihood(),
                            annotation.getBoundingPoly());
                }
                isAngry = angryReactionList.contains(res.getFaceAnnotationsList().get(0).getAngerLikelihood().name());
            }
            return isAngry;
        }
    }
}
