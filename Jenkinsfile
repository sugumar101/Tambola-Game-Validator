pipeline {
    agent any

    environment {
        IMAGE_NAME = 'sugumar101/tambola-game-validator'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], 
                          userRemoteConfigs: [[url: 'https://github.com/sugumar101/Tambola-Game-Validator.git']]])
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'd6362cfb-30a6-4ddb-8c96-f16726e966df', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        sh """
                        echo "${DOCKER_PASS}" | docker login -u "${DOCKER_USER}" --password-stdin
                        docker push ${IMAGE_NAME}:latest
                        docker logout
                        """
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying my first app...'
            }
        }
    }
}
