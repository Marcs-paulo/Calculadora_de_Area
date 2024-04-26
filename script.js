function calcularArea() {
    
    const nLados = parseInt(document.getElementById('lados').value);
    const comprimentoLado = parseFloat(document.getElementById('comprimento').value);
    
    const area = (nLados * comprimentoLado**2) / (4 * Math.tan(Math.PI / nLados));
    
    document.getElementById('info').innerHTML = `
        <p>Número de Lados: ${nLados}</p>
        <p>Comprimento do Lado: ${comprimentoLado.toFixed(2)}</p>
        <p>Área: ${area.toFixed(2)} unidades quadradas</p>
    `;
    
    desenharPoligono(nLados, comprimentoLado);
    
}

function desenharPoligono(nLados, comprimentoLado) {
    const canvas = document.getElementById('poligonoCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 800; 
    canvas.height = 800; 
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const escala = 20;
    const vertices = [];
    
    for (let i = 0; i < nLados; i++) {
        const angle = (i * 2 * Math.PI) / nLados;
        const x = centerX + escala * comprimentoLado * Math.cos(angle);
        const y = centerY + escala * comprimentoLado * Math.sin(angle);
        vertices.push({ x, y });
    }
  
    for (let i = 0; i < nLados; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY); 
        ctx.lineTo(vertices[i].x, vertices[i].y); 
        ctx.lineTo(vertices[(i + 1) % nLados].x, vertices[(i + 1) % nLados].y);
        ctx.closePath();
        ctx.fillStyle = '#4caf50'; 
        ctx.fill();
        ctx.strokeStyle = '#333'; 
        ctx.stroke();
    }
}