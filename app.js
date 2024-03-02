Vue.createaApp({
    data() {
        return{
            goals: [],
            enteredvalue: ''
        };
    },
    methods: {
      addGoal() {
        this.goals.push(this.enteredvalue);
        this.enteredvalue = '';
        }
    }
}).mount('#app');
    
    // const buttonEl = document.querySelector('button');
    // const inputEl = document.querySelector('input');
    // const listEl = document.querySelector('ul');

    // function addGoal() {
    //     const enteredvalue = inputEl.value;
    //     const listitem = document.createElement('li');
    //    listitem.textContent = enteredvalue;
    //    listEl.appendChild(listitem);
    //    inputEl.value=''; 
    // }
    
    // buttonEl.addEventListener('click', addGoal);

