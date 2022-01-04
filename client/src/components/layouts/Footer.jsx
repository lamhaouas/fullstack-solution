function Footer() {
    const footerYear = new Date().getFullYear()  
     return (
        <footer className="footer p-10 footer-center">
            <div>
                <p>Openclassrooms {footerYear}</p>

            </div>
        </footer>
    )
}

export default Footer
