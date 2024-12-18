function getMatrixValues(matrixId) {
    return [
        [parseFloat(document.getElementById(`${matrixId}11`).value) || 0, parseFloat(document.getElementById(`${matrixId}12`).value) || 0],
        [parseFloat(document.getElementById(`${matrixId}21`).value) || 0, parseFloat(document.getElementById(`${matrixId}22`).value) || 0]
    ];
}

function setResult(matrix) {
    const resultMatrix = document.getElementById('resultMatrix');
    resultMatrix.innerHTML = 
        `<p>${matrix[0][0]} ${matrix[0][1]}</p>
         <p>${matrix[1][0]} ${matrix[1][1]}</p>`;
}

function addMatrices() {
    const matrixA = getMatrixValues('a');
    const matrixB = getMatrixValues('b');
    const result = [
        [matrixA[0][0] + matrixB[0][0], matrixA[0][1] + matrixB[0][1]],
        [matrixA[1][0] + matrixB[1][0], matrixA[1][1] + matrixB[1][1]]
    ];
    setResult(result);
}

function subtractMatrices() {
    const matrixA = getMatrixValues('a');
    const matrixB = getMatrixValues('b');
    const result = [
        [matrixA[0][0] - matrixB[0][0], matrixA[0][1] - matrixB[0][1]],
        [matrixA[1][0] - matrixB[1][0], matrixA[1][1] - matrixB[1][1]]
    ];
    setResult(result);
}

function multiplyMatrices() {
    const matrixA = getMatrixValues('a');
    const matrixB = getMatrixValues('b');
    const result = [
        [
            matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0],
            matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1]
        ],
        [
            matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0],
            matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1]
        ]
    ];
    setResult(result);
}
