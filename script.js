const outputField = document.getElementById('output');
const inputField = document.getElementById('input');
const tagRemoverInput = document.getElementById('tagRemoverInput');


function cleanTags() {
    const text = inputField.value;
    let newTag = "";
    let outputText = "";
    let restOfText = inputField.value;

    while(restOfText.includes("<")) {
        const startsAt = restOfText.indexOf("<");
        const endsAt = restOfText.indexOf(">", startsAt);

        outputText+= restOfText.substring(0, restOfText.indexOf("<"));
        const currentTag = restOfText.substring(startsAt, endsAt+1);
        const space = currentTag.indexOf(" ");
        
        if(space<0) {
            newTag = currentTag;
        }
        else {
            newTag = currentTag.substring(0, space) + ">";
        }

        restOfText = restOfText.substring(endsAt+1, text.length);
        outputText += newTag;
    }
    let finalText = outputText+restOfText
    outputField.innerHTML=(finalText)
}

function removeTags() {
    const text = inputField.value;
    if(tagRemoverInput.value.length>0) {
        const tag = tagRemoverInput.value;
        let outputText = "";
        let restOfText = inputField.value;

        while(restOfText.includes("<" + tag + ">")) {
            
            const startsAt = restOfText.indexOf("<" + tag  + ">");
            const endsAt = restOfText.indexOf(">", startsAt);
            

            outputText+= restOfText.substring(0, startsAt);
            restOfText = restOfText.substring(endsAt+1, text.length);
            console.log(restOfText)
        }
        let finalText = outputText+restOfText
        outputField.innerHTML=(finalText.replaceAll('</' + tag + '>', ""))
    }
}

function outputToInput() {
    inputField.value = outputField.value;
}
