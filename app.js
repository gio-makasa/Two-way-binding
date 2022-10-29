Vue.createApp({
    data(){
        return{
            user: '',
            enterv: ''
        }
    },
    methods:{
        alertfn(){
            alert('Clicked');
        },
        typed(e){
            this.user = e.target.value;
        },
        entered(e){
            this.enterv = e.target.value;
        }
    }
}).mount('#assignment');