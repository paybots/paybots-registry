web: java -jar target/*.war --spring.profiles.active=dev,native,heroku --server.port=$PORT --security.user.password=${PAYBOTS_PASSWORD:-"password"} --eureka.password=${PAYBOTS_PASSWORD:-"password"}
