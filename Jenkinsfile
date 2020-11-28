pipeline {
  agent any
  
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/xor-shruti/automationFrameworkTypescript.git'
      }
    }
    stage('Staging') {
            steps {
                sh 'sudo docker-compose build'
                sh 'sudo docker-compose up -d'
            }
        }
     
    stage('Test') {
      steps {
         sh 'npm run test:chrome:parallel -- --tags @all'
      }
    }      
  }
}
