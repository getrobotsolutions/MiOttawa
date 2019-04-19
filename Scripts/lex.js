var waveform = window.Waveform();
var message = document.getElementById('message');
var config, conversation;
message.textContent = 'Tap to ask Question!';

document.getElementById('audio-control').onclick = function () {

    var id1 = "U2FsdGVkX1+xA9zzR4BBZ0Aw4P9LE4FOYwX3r4G/cdDcbb3LnuY2pjJZtvgOmUUb6KkwwYohRDHcwWfzUJ2COXwSZr5Eb+8JsMalfUGmTsY9Jygrp4aEkyFq7BxSqyXz";
    var id2 = "U2FsdGVkX1+f+FHPNvzND7pHmbG2IhMmlGl8cfgPhsmqUApX/47nK8A/v4Yt8YBi1JpLm0+reZbWstgxjiadM446fys2dLjPKRhTQTY9h43fWdLTQEVZ+o4ek28ggtKUieo0idNiGyqw3ENFbyDMig==";
    var key = "iloverobots@ARS";
    var decryptedBytes = CryptoJS.AES.decrypt(id1, key);
    decryptedBytes = CryptoJS.AES.decrypt(decryptedBytes.toString(CryptoJS.enc.Utf8), key);
    id1 = decryptedBytes.toString(CryptoJS.enc.Utf8);

    decryptedBytes = CryptoJS.AES.decrypt(id2, key);
    decryptedBytes = CryptoJS.AES.decrypt(decryptedBytes.toString(CryptoJS.enc.Utf8), key);
    id2 = decryptedBytes.toString(CryptoJS.enc.Utf8);




    //AWS.config.credentials = new AWS.Credentials(document.getElementById('ACCESS_ID').value, document.getElementById('SECRET_KEY').value, null);
    AWS.config.credentials = new AWS.Credentials(id1,id2, null);
    AWS.config.region = 'us-east-1';

    config = {
        lexConfig: { botName: 'OttawaTwo' }
        //lexConfig: { botName: document.getElementById('BOT').value }
    };

    conversation = new LexAudio.conversation(config, function (state) {
        message.textContent = state + '...';
        if (state === 'Listening') {
            waveform.prepCanvas();
        }
        if (state === 'Sending') {
            waveform.clearCanvas();
        }
    }, function (data) {
        console.log('Transcript: ', data.inputTranscript, ", Response: ", data.message);
        dataKey = data.message;
        console.log("sending Key:" + dataKey);

        $.ajax({
            type: "GET",
            data: { key: dataKey},
            url: "/api/sendresponse"
        });

        key = data.message;

        if (key === "maps")
        {
            location.href = "http://localhost:3000/Contents/Maps/index.html";
        }
        else if (key === "The Parks and Recreation Office")
        {
            ShowPopupMap("images/maps/O-Parks & Recreation.png");
        }
        else if ( key === "Fiscal Sevices")
        {
            ShowPopupMap("images/maps/O-Fiscal Services Updated .png")
        }
        else if ( key === "Sheriff's Office")
        {
            ShowPopupMap("images/maps/O-Sheriff.png")
        }
        else if ( key === "Treasurer's Office")
        {
            ShowPopupMap("images/maps/O-County Treasurer.png")
        }
        else if ( key === "GIS")
        {
            ShowPopupMap("images/maps/O-GIS.png")
        }
        else if ( key === "Clerk/Register of Deeds office")
        {
            ShowPopupMap("images/maps/o-Register of Deeds.png")
        }
        else if ( key === "Visit the Clerk/Register of Deeds office")
        {
            ShowPopupMap("images/maps/o-Register of Deeds.png")
        }
        else if ( key === "Human Resources" || key === "Visit miottawa.org/Departments/HR/ or stop by Human Resources" || key === "Stop by Human Resources to check in" || key === "Visit the Employee Portal or Human Resources" || key === "Visit Human Resources")
        {
            ShowPopupMap("images/maps/O-Human Resources.png")
        }
        else if ( key === "Locations vary so check with the MSU Extension Office." || key === "Yes. Please go to MSU Extension." || key === "Yes, visit MSU Extension" || key === "Yes at the MSU Extension Office or through the MSU bookstore at bookstore.msue.msu.edu")
        {
            ShowPopupMap("images/maps/O-MSU Extension.png")
        }
        else if ( key === "Water Resources Commissioner's Office")
        {
            ShowPopupMap("images/maps/O-Water Resources Commissioner.png")
        }
        else if ( key === "Water Resources Commissioner's Office or miottawa.org/Departments/Drain")
        {
            ShowPopupMap("images/maps/O-Water Resources Commissioner.png")
        }


    }, function (error) {
        message.textContent = error;
    }, function (timeDomain, bufferLength) {
        waveform.visualizeAudioBuffer(timeDomain, bufferLength);
    });
    conversation.advanceConversation();
};