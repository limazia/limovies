export function Loading() {
  return (
    <div className="container-fluid container-loading">
      <div className="row h-100 justify-content-center align-items-center">
        <div
          className="spinner-border"
          style={{ width: '3rem', height: '3rem' }}
        >
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    </div>
  );
}
