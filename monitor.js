// Función para obtener los datos de Elasticsearch ITG
function getElasticsearchITGStatus() {
  // Obtiene las credenciales de usuario y contraseña desde variables de entorno
  const username = process.env.ELASTIC_ITG_USER;
  const password = process.env.ELASTIC_ITG_PASS;

  // Realiza una petición AJAX a la API de Elasticsearch ITG
  fetch('https://elasticsearch.andreani.com.ar', {
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    }
  })
  .then(response => response.json())
  .then(data => {
    // Actualiza el contenido del div con el resultado del monitoreo
    document.getElementById('elasticsearch-itg').innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error al obtener los datos de Elasticsearch ITG:', error);
  });
}

// Función para obtener los datos de Elasticsearch Monitor
function getElasticsearchMonitorStatus() {
  // Obtiene las credenciales de usuario y contraseña desde variables de entorno
  const username = process.env.ELASTIC_MONITOR_USER;
  const password = process.env.ELASTIC_MONITOR_PASS;

  // Realiza una petición AJAX a la API de Elasticsearch Monitor
  fetch('https://elastic2andreani.com.ar', {
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    }
  })
  .then(response => response.json())
  .then(data => {
    // Actualiza el contenido del div con el resultado del monitoreo
    document.getElementById('elasticsearch-monitor').innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error al obtener los datos de Elasticsearch Monitor:', error);
  });
}

// Función para obtener el estado de los nodos de OpenShift
function getOpenShiftNodesStatus() {
  // Realiza una petición AJAX a la API de OpenShift
  fetch('https://api.ocpprod.andreani.com.ar:6443')
  .then(response => response.json())
  .then(data => {
    // Actualiza el contenido del div con el resultado del monitoreo
    document.getElementById('openshift').innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error al obtener los datos de OpenShift:', error);
  });
}

// Realiza las llamadas a las funciones de monitoreo cada 5 segundos
setInterval(() => {
  getElasticsearchITGStatus();
  getElasticsearchMonitorStatus();
  getOpenShiftNodesStatus();
}, 5000);
