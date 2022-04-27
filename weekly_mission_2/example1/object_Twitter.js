const user ={
    user: "Isaac",
    username: "AlejandrosMtz",
    bio: "...",
    age: "26",
    birthdate: "12 April",
    location:  "Mexico City",
    url: "algo.com",
    getGeneralInfo: function(){
        return `Hi! ${this.username}`
    }
};

const trending_topic ={
    hashtag: "#algodealgo",
    retuits: "1 millon",
    likes: "900 mil",
    comment: "7 millon",

};

const hashtag ={
    hashtag:"#",
    comment: "Welcome my brother! New comedy Session.",
    sentence: "algodealgo",
    setHasgtagtopic: function(){
       return `${this.comment} ${this.hashtag}${this.sentence}`
    }
};

console.log("Nombre del repo: " + user.user)
console.log(user.getGeneralInfo())
console.log(hashtag.setHasgtagtopic())
