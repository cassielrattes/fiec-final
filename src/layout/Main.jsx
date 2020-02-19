import React from 'react'

const Main = () => {
    const lista = ['Bruno','Estefania','Raquel','Mayara','Christopher']
    return (
        <div>
            {lista.map(nome => (
                <div>
                <h5>{nome}</h5><br />
                </div>
            ))}
        </div>
    )
}

export default Main
