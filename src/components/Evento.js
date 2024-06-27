import Button from "./evento/Button"

export default function Evento() {
    function meuEvento() {
        console.log(`Opa, fui ativado`)
    }

    function segundoEvento() {
        console.log("Ativando o segundo evento")
    }

    return  (
    <div>
        <p>CLique para disparar um evento</p>
        <Button text="Primeiro Evento" event={meuEvento}/>
        <Button text="Segundo Evento" event={segundoEvento}/>
        {/* <button onClick={meuEvento}>Ativar!</button> */}
    </div>
    )
}