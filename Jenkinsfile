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
                               
                                set -x
                                npm run build
                                set +x

                                set -x
                                npm start &
                                sleep 1
                            
                                set +x

                                echo 'was executed.'
                                
                                set -x
                                kill $(cat .pidfile)
                            }
            }

    }
}