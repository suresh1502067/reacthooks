pipeline {
    agent any
    
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
                            steps {
                               
                                npm run build
                                
                                echo 'was executed.'

                                kill $(cat .pidfile)
                            }
            }

    }
}