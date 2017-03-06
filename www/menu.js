class Menu {
    constructor(){
        this.draw = false;
        this.select = false;
    }

    setDraw(){
        this.draw = true;
        this.select = false;
    }

    getDraw(){
        return this.draw;
    }

    setSelect(){
        this.draw = false;
        this.select = true;
    }

    getSelect(){
        return this.select;
    }
}


var menu = new Menu();

console.log(menu);

function DrawingMode (){
    menu.setDraw();
    console.log("Draw Mode ON");
    console.log(menu);
    $("#draw").addClass("active");
    $("#select").removeClass("active");
}

function SelectMode (){
    menu.setSelect();
    console.log("Draw Select ON");
    console.log(menu);

    $("#select").addClass("active");
    $("#draw").removeClass("active");
}
