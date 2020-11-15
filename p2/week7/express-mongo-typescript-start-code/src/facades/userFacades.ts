var bc = require("bcryptjs");
const debug = require("debug")("game-case")

interface IGameUser { name: string, userName: string, password: string, role: string }

const users: Array<IGameUser> = [];
export class UserFacade {

  static testUsers() {
    bc.hash("user password",10)
    .then((testpass: string) =>{
    users.push({
      name: "Tom",
      userName: "Test1",
      password: testpass,
      role : "Hey"
    }),
    users.push({
      name: "Tim",
      userName: "Test2",
      password: testpass,
      role : "Hey3"
    })
  })}

  static addUser(user: IGameUser): boolean {
        return bc.hash(user.password,10)
        .then((hashPw: string)=>{
            user.password= hashPw;
            users.push(user)
        return true})
        .catch((err: any) =>{
            debug(err)
            return false
    })
  }
  static deleteUser(userName: string): boolean {
    const u = users.find((u)=> u.userName=== userName)
    if(!u) return false;
    let idx = users.indexOf(u)
    users.splice(idx, 1)
    return true
}
  static getAllUsers(): Array<IGameUser> { 
  debug("HASDasdassaassasa")
      return users;
   }
  static getUser(userName: string): IGameUser {
    console.log(users)
    let user = users.find((user)=> user.userName === userName)
    if(user) return user;
    throw new Error ("No user found") 
  }

  static checkUser(userName: string, password: string): boolean {
    return bc.hash(password,10)
    .then((hashPw: string)=>{ users.find((u)=> 
         {u.userName=== userName && u.password===hashPw})
    return true})
    .catch((err: any) =>{
        debug(err)
        return false
    })
    }
    
}
