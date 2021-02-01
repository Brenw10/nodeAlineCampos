# Create Machine
  - `docker-compose build`

# Turn Machine On
  - `docker-compose up -d`

# Turn Machine Off
  - `docker-compose down`

# Access Machine
  - `docker exec -it $(docker ps -aqf "name=alinecampos_nodejs") /bin/bash`

# Current Machine Running
  - `docker ps`

# Find Container ID
  - `docker ps -aqf "name=alinecampos_nodejs"`

# Delete All Machines
  - `docker rm -vf $(docker ps -a -q)`
  - `docker rmi -f $(docker images -a -q)`