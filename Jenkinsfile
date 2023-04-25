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
                                sh 'sudo ./jenkins/scripts/deliver.sh'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                sh 'sudo ./jenkins/scripts/kill.sh'
                            }
            }

    }
}