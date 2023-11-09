import './Rodape.css' 

const Rodape = () => {

    return (
    <section className='footer-fundo'>
        <footer className='footer'>
            <div className='icones-footer'>
            <a href='#'>
            <img src='/img/fb.png' alt='logo facebook'/>
            </a>
            <a href='#'>
            <img src='/img/tw.png' alt='logo Twitter'/>
            </a>
            <a href='#'>
            <img src='/img/ig.png' alt='logo instagram'/>
            </a>
            </div>
            <div className='logo-footer'>
            <img src='/img/logo.png' alt='logo Organo'/>
            </div>
            <p className='footer-texto'>Desenvolvido por Alura.</p>
        </footer>
    </section>
    )
}

export default Rodape