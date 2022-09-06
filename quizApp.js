import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions=[
        {
            id:"Question1",
            question:"Which of the following is not a template loop?",
            answers:{
                a:"for :each",
                b:"iterator",
                c:"map loop",
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the following is invalid in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js",
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which of the following is not a directive?",
            answers:{
                a:"if:true",
                b:"@track",
                c:"if:false",
            },
            correctAnswer:"b"
        }
    ]
    selected={}//for storing answers

    //change handler method
    changeHandler(event){
        console.log("name",event.target.name)   
        console.log("value",event.target.value)
        const {name,value}= event.target //object destructuring
        this.selected={...this.selected,[name]:value}
    }

    submitHandler(){

    }

    resetHandler(){
        
    }

}