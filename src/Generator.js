import React from "react"


class Generator extends React.Component{
    constructor(){
        super()
        this.state = {           
            questionNumber: "",
            questionsAmount: "",
            baseLength: 2,
            iloscPoprawnychOdpowiedzi: 0,
            iloscWszystkichOdpowiedzi: 0,
            style1: "questionButton",
            style2: "questionButton",
            style3: "questionButton",
            style4: "questionButton",
            style5: "questionButton",
            isDisabled: false
        }
    }

    losuj = () => {       
        let tabOfNumber = []
        for (let i=0; i<this.state.questionsAmount; i++){
            let numer = Math.ceil(Math.random()*this.state.baseLength)
            tabOfNumber.push(numer+" ")
        }
            this.setState({questionNumber: tabOfNumber})
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
            this.setState({
            [name]: value
        })
    }
    
render() {
    const questionBase = [
        {
            id: 1,
            chapter: "Intensywna terapia",
            question: "Skala Glasgow-Blatchford dotyczy chorych:",
            answer1: "A. z ostrym zapaleniem trzustki.",
            answer2: "B. po urazie głowy.",
            answer3: "C. z pozaszpitalnym zapaleniem płuc",
            answer4: "D. z krwawieniem do przewodu pokarmowego.",
            answer5: "E. we wstrząsie septycznym",
            correctAnswer: "D"
        },
        {
            id: 2,
            chapter: "Psychiatria",
            question: "Życzeniowe przekształcanie przeżyć, zachowań, oczekiwań na przyszłość pod wpływem nastawień emocjonalnych, które zwykle nie są odzwierciedleniem rzeczywistości to:",
            answer1: "A. syntymia.",
            answer2: "B. katatymia.",
            answer3: "C. hipotymia",
            answer4: "D. atymia.",
            answer5: "E. hipertymia.",
            correctAnswer: "B"
        }
    ]
    console.log(questionBase[1])
    return(
        <div>
             <div className="Generator">
                <form>
                    <select 
                    name= "questionsAmount"
                    value= {this.state.questionsAmount}
                    onChange={this.handleChange}>
                        <option value="">--Wybierz ilość pytań--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                    </select>
                </form>
                <button onClick={this.losuj}>Generuj</button> 
                
             </div>
             <div className="questionPlace">
                 <h3>{this.state.questionNumber}</h3>
                 {questionBase.map((question) => 
                     <div key={question.id}> 
                        <label> {question.id}.{question.chapter}<hr/>{question.question}         
                            <button className={this.state.style1}
                            value="A"
                            disabled={this.state.isDisabled}
                            onClick={() => {                      
                                "A"===question.correctAnswer ? 
                                this.setState({style1: "goodAnswer",
                                iloscPoprawnychOdpowiedzi: this.state.iloscPoprawnychOdpowiedzi+1,
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                                :
                                this.setState({style1: "wrongAnswer",
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})                             
                            }}                   
                            >
                            {question.answer1}</button>
                            </label>
                            <label>
                            <button className={this.state.style2}
                            value="B"
                            disabled={this.state.isDisabled}
                            onClick={() => {                      
                                "B"===question.correctAnswer ? 
                                this.setState({style2: "goodAnswer",
                                iloscPoprawnychOdpowiedzi: this.state.iloscPoprawnychOdpowiedzi+1,
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                                :
                                this.setState({style2: "wrongAnswer",
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                            }}                    
                            >
                            {question.answer2}</button>
                            </label>
                            <label>
                            <button className={this.state.style3}
                            value="C"
                            disabled={this.state.isDisabled}
                            onClick={() => {                      
                                "C"===question.correctAnswer ? 
                                this.setState({style3: "goodAnswer",
                                iloscPoprawnychOdpowiedzi: this.state.iloscPoprawnychOdpowiedzi+1,
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                                :
                                this.setState({style3: "wrongAnswer",
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                            }}                    
                            >
                            {question.answer3}</button>
                            </label>
                            <label>
                            <button className={this.state.style4}
                            value="D"
                            disabled={this.state.isDisabled}
                            onClick={() => {                      
                                "D"===question.correctAnswer ? 
                                this.setState({style4: "goodAnswer",
                                iloscPoprawnychOdpowiedzi: this.state.iloscPoprawnychOdpowiedzi+1,
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                                :
                                this.setState({style4: "wrongAnswer",
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                            }}                     
                            >
                            {question.answer4}</button>
                            </label>
                            <label>
                            <button className={this.state.style5}
                            value="E"
                            disabled={this.state.isDisabled}
                            onClick={() => {                      
                                "E"===question.correctAnswer ? 
                                this.setState({style5: "goodAnswer",
                                iloscPoprawnychOdpowiedzi: this.state.iloscPoprawnychOdpowiedzi+1,
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                                :
                                this.setState({style5: "wrongAnswer",
                                iloscWszystkichOdpowiedzi: this.state.iloscWszystkichOdpowiedzi+1,
                                isDisabled: true})
                            }}  
                            >
                            {question.answer5}</button>
                    </label>                            
                 </div>)}
                 <div>Aktualny Wynik:
                     {this.state.iloscPoprawnychOdpowiedzi}/{this.state.iloscWszystkichOdpowiedzi}
                     <br />
                     {Math.round(this.state.iloscPoprawnychOdpowiedzi/this.state.iloscWszystkichOdpowiedzi*100)}%
                 </div>
             </div>
                                  
        </div>
    )
    }
}


export default Generator