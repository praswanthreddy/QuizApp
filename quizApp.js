import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions=[
        {
            id:"Question1",
            question:"In Which tag we can use directive in HTML file ?",
            answers:{
                a:"div",
                b:"form",
                c:"template",
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the following file is not a default file in LWC component folder?",
            answers:{
                a:"xml",
                b:"apex",
                c:"js",
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which of the following is not a array method?",
            answers:{
                a:"filter",
                b:"length",
                c:"map",
            },
            correctAnswer:"b"
        }
    ]
    selected={}//for storing answers
    isSubmitted=false
    correctAnswers=0

    //used for disabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }

    //for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success':'slds-text-color_error'}`
    }

    //change handler get's called on every click on the options
    changeHandler(event){
        //console.log("name",event.target.name)   
        //console.log("value",event.target.value)
        const {name,value}= event.target //object destructuring
        this.selected={...this.selected,[name]:value}
    }

    //form submit handler
    submitHandler(event){
        event.preventDefault()
        let correct=this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
        this.correctAnswers= correct.length
        this.isSubmitted=true
    }

    //form reset handler
    resetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted=false
    }

}