const now = new Date()

export default function Header(){
    return(
        <header>
            <h3>Result</h3>

            <span>time: {now.toLocaleTimeString()}</span>
        </header>
    )
}