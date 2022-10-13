

cc.Class({
    extends: cc.Component,
    properties: {
        setBtn:{
            default:null,
            type:cc.Button
        },
        gameBtn1:{
            default:null,
            type:cc.Button
        },
        gameBtn2:{
            default:null,
            type:cc.Button
        },
        gameBtn3:{
            default:null,
            type:cc.Button
        },
        goldLabel:{
            default:null,
            type:cc.Label
        },
        setLayout:{
            default:null,
            type:cc.Layout,
            visible:false
        },
        
    },
    // use this for initialization
    onLoad: function () {
        var data=cc.sys.localStorage.getItem("Current_Credit");
        if (!data){
            data=0;   
        }
        this.goldLabel.string = data;
    },
    showMenu() {
        this.setLayout.node.active = true
    },
    hideMenu() {
        this.setLayout.node.active = false
    },

    enterGame() {
        cc.director.loadScene("game")
    }

});


