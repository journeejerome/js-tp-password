const togglePassword = {
    start() {
        document.querySelector('html').className = "js-enabled";
        this.input = document.querySelector('input');
        document.querySelector('button').addEventListener("click", () => {
            this.showPass();
        });
    },
    showPass() {
        this.input.type === 'password' ? this.input.type = 'text' : this.input.type = 'password';
    }
};

togglePassword.start();
console.log('Bonjour');