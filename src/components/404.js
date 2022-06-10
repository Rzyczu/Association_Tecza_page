import React from 'react';

class Accessibility extends React.Component {
    constructor() {
        super();
        this.state = {};
    }


    handleClick = (operation) => {
        this.props.func(operation);

    }

    render() {
        return (
            <div
                style={{
                    position: 'relative',
                    height: 'calc(100vh - 32em - 123px)',

                    padding: '8em 1em 1em 1em',
                    position: 'relative',
                    maxWidth: '1500px',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }
                }
            >
                <h1
                    className="display-1"
                    style={{
                        paddingBottom: '20px'
                    }}
                >Nie znaleziono strony</h1>
                <p className="display-3">Przepraszamy, strona o podanym adresie nie została odnaleziona.
                    Prosimy sprawdzić poprawność adresu i spróbować ponownie.</p>

            </div >
        );
    }
}

export default Accessibility;
