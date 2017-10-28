export class User {
    constructor(
        public id: string,
        public name: string, 
        public user: string, 
        public mail: string,
        private pass: string
        ){}
}