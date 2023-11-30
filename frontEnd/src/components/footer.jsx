
function Footer() {
  return (
    <footer>
    <div className="mt-5" style={{backgroundColor: "#003b46"}}>
      <div className="row container-fluid centerElementos">
        <div className="mt-4 mb-md-0">
          <a href="https://github.com/JGarcia575">
            <img 
            src="img/footer.jpg" 
            className="mx-auto d-block imgFooter" 
            alt="logo del desarrollador de la aplicacion web"
            />
            
          </a>
        </div>
        <div className="text-center text-white p-3 font-monospace">
            <p>©2023 Copyright: The Lazy Cat</p>
        </div>
      </div>
    </div>
</footer>
  );
}

export { Footer };