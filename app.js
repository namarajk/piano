let notes=['C', 'C#','D','D#','E','F','F#','G','G#','A','A#','B']




function arrayRotate( notes, partition){
    // var arr1;
    let arr1=[];
    for(let i=0;i<partition;i++){
        // var arr1;
        arr1[i]= notes[i];// storing in another array upto the partition point
    }

    var j=0;
    for(let i=partition;i<notes.length;i++){
        notes[j]=notes[i];// shifting the array left to rotate
        j++;// j is storing now the final point upto which copying is done
    }

    for(let i=0;i<arr1.length;i++){
        notes[j]=arr1[i];// recoying from arr1
        j++
    }

}

function printArray(notes){
    for(i=0;i<notes.length;i++){
        // console.log(notes[i]," ");
        console.log(notes.join(','));
    }
}


arrayRotate(notes, 5);
console.log(notes.join(' , '));
printArray(notes);

function chord(){
    document.write("major chord = " + notes[0] + notes[4] + notes[7]);
    }

chord(notes[0]);


// how to store array output //
