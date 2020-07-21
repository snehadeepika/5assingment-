console.log("hello")

//question 1:
//==========

let num=prompt("enter a positive number");
console.log(num);
let arr=[1,2,3,4,5,6];
let odd=arr.filter(el=>el%2==0);
console.log(odd);
let oddcube=arr.filter(el=>el%2==0).map(el=>el**3);
console.log(oddcube);

//question 2:
//==========

class User {
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=0;
        this.course=[];
    }
    login(){
        console.log(`${this.name}has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name}has logged out`);
        return this;
    }
    addcoin(){
        this.lucoins++;
        console.log(`${this.name}has ${this.lucoins}coins`);
        return this;
    }
    class Moderator extends User {
        deleteUser(user){
            users=users.filter(u=>{
                return u.email !=user.email;
            })
        }
    }
    class Admin extends Moderator{
        addcourse(user,course){
            user.courses.push(course);
        console.log(user);
        }
    }

let user1 =new User('sneha',18,'sneha@gmail.com');
let user2 =new User('nitesh',19,'nitesh@gmail.com');
let mod=new Moderator('kumar',20,'kumar@gmail.com');
let admin=new admin('deepika',21,'deepika@gmail.com');
let User=[user1,user2,mod,admin];
admin.addcourse(user1,'Java');
admin.addcourse(user2,'c,c++');


//question 3:
//===========


fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'todos',
     body:JSON.stringify({
        userId:456,
        title:"some Title",body:'iorem ipsum',
    })
})
.then(response=>response.json())
.then(todos=>console.log(todos))