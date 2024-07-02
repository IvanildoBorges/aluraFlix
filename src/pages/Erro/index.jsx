import { ContainerNotFound } from "./styles"

const NotFound = () => {
  return (
    <>
      <ContainerNotFound>
        <h1 className='title'>Página não encontrada</h1>
        <p>
          <i>404: Not Found</i>
        </p>
      </ContainerNotFound>
    </>
  )
}

export default NotFound