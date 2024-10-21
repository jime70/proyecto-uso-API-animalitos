import React from 'react';
    
    class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error) {
        // Actualiza el estado para que la próxima renderización muestre la UI alternativa
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        // También puedes registrar el error en un servicio de reporte de errores
        console.log('Error capturado:', error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
        // Puedes renderizar cualquier interfaz de usuario alternativa
        return <h1>Oops! Algo salió mal.</h1>;
        }
    
        return this.props.children;
    }
    }
    
export default ErrorBoundary;