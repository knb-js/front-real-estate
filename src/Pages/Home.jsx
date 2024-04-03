import Cielo from '../images/cielo.jpg';
//import Logo from '../images/Logo.png';
//import Logo2 from '../images/Logo2.png';


export const Home = () => {
  return (
    <div>
      <header className="bg-gray-800 py-4">
          <div className="container mx-auto flex items-center justify-between">
              <h1 className="text-white text-lg font-semibold">Real State</h1>
              <div className="flex">
                  <a href="/pagina1" className="text-white px-4 py-2">Home</a>
                  <a href="/pagina2" className="text-white px-4 py-2">Casas</a>
                  <a href="/pagina3" className="text-white px-4 py-2 mr-32">Departamentos</a>
                  <a href="/pagina4" className="text-white px-4 py-2 border border-gray-400 rounded-xl ">Ingresar</a>
              </div>
          </div>
      </header>

      <div style={{ position: 'relative' }}>
        <img src={Cielo} alt="Imagen de fondo" style={{display: 'block', margin: '100px auto' }} />
          <div style={{ position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius justo sit amet libero ultricies, eu vestibulum odio rutrum. Integer et nisi vel nisi sollicitudin vehicula. Morbi id libero sit amet libero sollicitudin blandit. Nulla facilisi. Nulla ac eros et dolor vulputate fermentum. Duis sodales, lorem id vestibulum vestibulum, velit elit scelerisque libero, ac scelerisque ipsum ligula ut nisi.           
            </p>
          </div>
      </div>

        <div className='py-20'>
          <div className="container mx-auto justify-between flex items-center border border-gray-400 rounded-lg p-6" style={{backgroundImage: 'url("../images/cielo.jpg")'}}>
            <div className="mr-10">
              <img src={Cielo} className="w-full h-full" alt="Logo" />  
            </div>
              <div>
              <div className="border border-gray-400 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Título del Texto</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius justo sit amet libero ultricies, eu vestibulum odio rutrum. Integer et nisi vel nisi sollicitudin vehicula. Morbi id libero sit amet libero sollicitudin blandit. Nulla facilisi. Nulla ac eros et dolor vulputate fermentum. Duis sodales, lorem id vestibulum vestibulum, velit elit scelerisque libero, ac scelerisque ipsum ligula ut nisi.
                  </p>
                  
                </div>
              </div>
          </div>
        </div>
      <main>
       lol     {/* Contenido principal de la página */}
      </main>
    </div>
  )
}
