package com.example.java;

import com.google.cloud.vision.v1.*;
import com.google.protobuf.ByteString;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@RestController
public class TransactionController {


    TransactionServiceImpl transactionService;

    @RequestMapping(method = RequestMethod.GET, path = "getData")
    public String getData() {
        System.out.println("test");
        return "s";
    }

    @GetMapping(value = "/liveness")
    public String liveness(){
        return "OK";
    }

    @RequestMapping(value = "/createTransaction", method = RequestMethod.POST)
    public String create(@RequestBody Transaction currentTransaction) throws IOException {

        System.out.println("Account number is " + currentTransaction.getAccountNumber());
        //todo; code for creating transaction

        boolean isAngry = isAngryGCS();

        if (isAngry) {
            //todo: code for sending a mail
            System.out.println("transaction pending mail sent");

            //SMTP
            //GCP mail API

            return "transaction pending mail sent";
        } else {
            System.out.println("transaction created");
            //todo : persistence in table

            return "Transaction is created.";
        }

    }


    public static boolean isAngryLocal() throws IOException {
        List<AnnotateImageRequest> requests = new ArrayList<>();
        //String filePath = "/Users/karanpurswani/Downloads/657575.jpg";
        String filePath = "/Users/karanpurswani/Downloads/angry.jpeg";

        ByteString imgBytes = ByteString.readFrom(new FileInputStream(filePath));

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

                System.out.println("final reaction: " + res.getFaceAnnotationsList().get(0).getAngerLikelihood());
                isAngry = angryReactionList.contains(res.getFaceAnnotationsList().get(0).getAngerLikelihood().name());
            }
        }
        return isAngry;
    }

    public static boolean isAngryGCS() throws IOException {
        List<AnnotateImageRequest> requests = new ArrayList<>();

        //String gcsPath = "gs://gcp-hackathon-demo-project/657575.jpg";
        String gcsPath = "gs://gcp-hackathon-demo-project/angry.jpeg";

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
}
