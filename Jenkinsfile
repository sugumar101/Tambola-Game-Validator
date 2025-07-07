pipeline {
    agent any
    environment {
        IMAGE_NAME = 'sugumar101/Tambola-Game-Validator'
    }
        
    stages {
        stage('Checkout'){
            steps{
                git branch: 'main', url: 'https://github.com/sugumar101/Tambola-Game-Validator'
            }
        }
        stage('Build Docker image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:latest ."
            }
        }
        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'd6362cfb-30a6-4ddb-8c96-f16726e966df', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]){
                    bat """
                    echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                    docker push %IMAGE_NAME%:latest
                    docker logout
                    """
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying my first app'
            }
        }
    }
}
