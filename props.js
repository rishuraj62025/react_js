// props means properties

// jahan pe hum component ko pass krte hain fragment
// mein render hone ke liye wahan pe hum component ke 
// andar hi properties de skte hain 

for ex:

const book1={
    title : "My Book" ,
    price : 50
}


const BookList = () =>{
    return {
        <div>
         <Book greet="hello"  image={book1.title} price={book1.price} />  ==> ye component hai
        </div>
    } 
}

// multiple properties ke beech mein bs gap dena hai no semicolon, colon

// aise hum direct html jaisa property bhi de skte hain 
// curly braces ke form mein bhi de skte hain jb javascript 
// ke form mein dena hai to kahin ka kuch use krna hai to


then ye property use kahan hoga jo upar diye hain ?

to ye property uss file mein use krenge jahan pe ye component
define kiye hain 

ex:

const Book = (props) => {
    return (
      <div>
        <div>
        src = {props.image}
        </div>

        <div>
        src = {props.price}
        </div>

      </div>
    )
}

// ye ek example hai ki kaise use kr skte hain props , ek 
// file mein pass krenge property dusre file mein usko use kr
// skte hain jahan uss component ko define kiya gya hai 

// yahan pe ye dhyan dena hai ki jo bhi property jahan pe define 
// hoga aur jahan pe use hoga wahan pe curly braces mein likhna prega 
// agar js ka use ho rha to 


hum isme destructuring bhi kr skte hain ye ek js ka concept 
hai jisse code likhna easy ho jata hai 

same example mein dekhte hain destructuring krke 

destructuring mein dekhte hain ki kaun kaun sa property aa rha hai 
jaise yahan pe dekhenge ki props ke pass kaun kaun sa property hai 
iske pass   image and price property hai 

destructuring ke baad simply props.image ke jgh pe image likh 
skte hain jisse code easy and clean ho jata hai

ex:

const Book = (props) => {
    const {image, price} = props  ==> destructuring
    return (
      <div>
        <div>
        src = {image}
        </div>

        <div>
        src = {price}
        </div>

      </div>
    )
} 


// .json file bhi bana skte hain isme hm array of objects 
// store krte hain , iska format hai 
 [
    {

    },
    {

    }
 ] 

// agar bahut saare books ka list banana hai to hm array of objects 
// ka use kr skte hain aur usko ek json file mein store kr skte hain 
// aur json file ko phir import kr skte hain 

// map ka bhi use kr skte hain 
BookList.map((ele)=>{
    return <book  image={ele.image} price={ele.price}>
})