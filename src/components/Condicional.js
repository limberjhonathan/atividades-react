import { useState } from "react";

export default function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email);
        // console.log(userEmail);
        // console.log("Testando")
    }

    function limparEmail(e){
        setUserEmail('')

    }

    return (
        <div>
            <h2>Cadastre o seu E-mail: </h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>O email do fulano é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}