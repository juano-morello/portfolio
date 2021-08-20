import React, {useState} from 'react'
import {useFormspark} from '@formspark/use-formspark'
import Botpoison from '@botpoison/browser'

const Contact: React.FC = () => {
    const botpoison = new Botpoison({
        publicKey: 'pk_dc72a368-87a0-4a54-8739-e1a098015ee0'
    });

    const ContactForm = () => {
        const [submit, submitting] = useFormspark({
            formId: "ED9svWaB"
        });
        const [message, setMessage] = useState("");
        return (
            <form onSubmit={async (e) => {
                e.preventDefault();
                const { solution } = await botpoison.challenge();
                await submit({message, _botpoison: solution})
                alert('Email received. Yay!')
            }}>
                <input
                    type={'email'}
                    className={'form-control'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className={'btn btn-lg btn-primary mt-2'} type="submit" disabled={submitting}>Send</button>
            </form>
        );
    };


    return (
        <div>
            <div className="px-4 py-5 my-5 text-center hero">
                <h1 className="display-5 fw-bold">{`Let's get in touch`}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">{`Feel free to enter your email, I'll be back to you shortly`}</p>
                    <ContactForm/>
                </div>
            </div>
        </div>

    )
}

export default Contact