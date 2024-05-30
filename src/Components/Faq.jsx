import { useState } from 'react'
import './Faq.css'



const FaqQuestions = ({answer,question}) => {

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <div className={`container ${show ? "active" : ""}`}>
                <div className="questions" onClick={toggleShow}>{question}</div>
                <div className="answers">
                    <div>
                       {answer}
                    </div>
                </div>
            </div>
        </>
    )
}
const FaqItems = ({datas}) => {
    return (
        <>
            <div className='items'>
                <h1>  Faq Qustions</h1>
                {datas.map((item) => (
                    <FaqQuestions key={item.id} question={item.question} answer={item.answer} />
                ))}
            </div>

        </>
    )
}

const datas = [
    { id: 1, question: "What is React used for?", answer: "React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development. React Native, a framework based on React, is specifically designed for mobile app development, while React Desktop allows you to create desktop applications using web technologies." },
    { id: 2, question: "What is a JS used for?", answer: "What Is JavaScript? JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc." },
    { id: 3, question: "What is this node?", answer: "Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications." }
];
const Faq = () => {
    return (
        <>
            <FaqItems datas={datas} />
        </>
    )
}

export default Faq
