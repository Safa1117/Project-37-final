class Question {

    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("Answer")
      this.title = createElement();
      this.question = createElement();
      this.option1 = createElement();
      this.option2 = createElement();
    }
  

    display(){
     this.title.html("My Quiz Game");
     this.title.position(350, 50);

     this.question.html("Question:-What is my birds name?");
     this.question.position(150, 120);
     this.option1.html("1: Andrew ");
     this.option1.position(150,140);
     this.option2.html("2: Olive ");
     this.option2.position(150,160);

     this.input1.position(150, 190);
     this.input2.position(330, 190);
      };
  
    }
  
  