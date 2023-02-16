## Nursery Checker Backend project

# CONTEXTO

Gestionar el servicio de recogida y entrega de los alumnos a los padres registrando los datos digitalmente.

- Gestión del Staff de la empresa:
    - Creación de empleados,
    - Consultar lista de empleados,
    - Consultas específicas del Staff
  
- Gestión de datos de los alumnos:
    - Creación de alumnos y edición de sus datos,
    - Consultas de datos de los alumnos,
    - Control digital de las llegadas y salidas de los alumnos

# DEVELOPERS

- [Joaquín Gázquez](https://github.com/Joaquingse)


# DB SCHEMAS

## USER

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION       |
|------------|--------------|-----------|----------|------------------|
| name       | string       |           | YES      |                  |
| surname    | string       |           | YES      |                  |
| dni        |string        |           | YES      |unique, maxLength, minLenght|
| phone      | number       |           | YES      |      |
| email      | Mongoose Schema Type email|           | YES      | Mongoose, Unique   |
| password   | string       |           | YES      |                  |
| role       | string         |          | default = worker |enum: admin, owner, chief, worker |
| nursery | ObjectId | nursery | {role !== admin} |        |

...

## TUTOR

| KEY         | TYPE          | REFERENCE | REQUIRED | VALIDATION        |
|-------------|---------------|-----------|----------|-------------------|
| name       | string       |           | YES      |                  |
| surname    | string       |           | YES      |                  |
| dni        |string        |           | YES      |unique, maxLength, minLenght|
| phone      | number       |           | YES      |      |
| email      | Mongoose Schema Type email|           | YES      | Mongoose, Unique   |
| password   | string       |           | YES      |                  |
| relation   | string       |           | YES      |enum: parents, family, others |
...

## CHILD

| KEY    | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------------|-----------|----------|----------------|
| name       | string       |           | YES      |                  |
| surname    | string       |           | YES      |                  |
| tutors | ObjectId | tutor | YES |        |
| nursery | ObjectId | nursery | YES |        |
| dinner | Boolean |         | YES  |            |
| early | Boolean |         | YES  |            |
| alergies | Array |         |      |            |
| activities | Array |         |      |            |
...

## NURSERY

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
| name       | string       |           | YES      |                  |
| phone      | number       |           | YES      |      |
| email      | Mongoose Schema Type email|           | YES      | Mongoose, Unique   |
| address       | string       |           | YES      |  Unique            |
...

## EVENT

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
| title  | string  |           | YES      |                  |
| date   | Date    |           | YES      |      |
| attendance | Number |           |       |       |
| description       | string       |           |       |              |
...

## DROP

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
| child  | ObjectId  |           | YES      |                  |
| date   | Date    |           | YES      |      |
| who | ObjectId  |           | YES      |                  |
...

## PICK

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
| child  | ObjectId  |           | YES      |                  |
| date   | Date    |           | YES      |      |
| who | ObjectId  |           | YES      |                  |
...

# API ROUTES

## AUTHENTICATION ENDPOINTS

| METHOD | URL             | AUTH | FUNCTION                 |
|--------|-----------------|------|--------------------------|
| POST   | '/auth/signup'   | NO   | register a user      |
| POST   | '/auth/login'   | NO   | Authenticate a user      |

## USERS ENDPOINTS

| METHOD | URL                  | AUTH    | FUNCTION                    |
|--------|----------------------|---------|-----------------------------|
| GET    | '/user/'    | admin, owner | List all users           |
| GET    | '/user/:id'    | Authenticate user | Show user info[^1]    |
| POST   | '/user/new'     | admin, owner | Create a user account[^2]    |
| PUT    | '/user/:id' | Authenticate user | Update a user account [^3]   |
| DELETE | '/user/:id' | admin | Delete a user account    |
...

[^1]: Workers and chief can see own info only, admin and owner can see all.
[^2]: Admin can create all type of account, owners only chief and worker types.
[^3]: Only Admin can update data from other account, rest of users can update their own data only.

## TUTORS ENDPOINTS

| METHOD | URL               | AUTH | FUNCTION                          |
|--------|-------------------|------|-----------------------------------|
| GET    | '/tutor/'    | admin, owner | List all tutors     |
| GET    | '/tutor/:id'    | Authenticate user | Show tutor info    |
| POST   | '/tutor/add'     | admin, owner | Create a tutor    |
| PUT    | '/tutor/:id' | admin, owner, chief | Update tutor data    |
| DELETE | '/tutor/:id' | admin, owner | Delete a tutor profile   |
...

## CHILD ENDPOINTS

| METHOD | URL                   | AUTH | FUNCTION                                 |
|--------|-----------------------|------|------------------------------------------|
| GET    | '/child/'    | admin, owner | List all childs     |
| GET    | '/child/:id'    | Authenticate user | Show child info    |
| POST   | '/child/add'     | admin, owner | Create a child    |
| PUT    | '/child/:id' | admin, owner, chief | Update child data    |
| DELETE | '/child/:id' | admin, owner | Delete a child profile    |
...

## NURSERY ENDPOINTS

| METHOD | URL            | AUTH    | FUNCTION                   |
|--------|----------------|---------|----------------------------|
| GET    | '/nursery/'    | admin, owner | List all nurseries     |
| GET    | '/nursery/:id'    | admin, owner | Show nursery info    |
| POST   | '/nursery/add'     | admin, owner | Create a nursery    |
| PUT    | '/nursery/:id' | admin, owner | Update nursery data    |
| DELETE | '/nursery/:id' | admin, owner | Delete a nursery profile    |
...

## EVENT ENDPOINTS

| METHOD | URL            | AUTH    | FUNCTION                   |
|--------|----------------|---------|----------------------------|
| GET    | '/event/'    | Authenticate user | List all events     |
| GET    | '/event/:id'    | Authenticate user | Show event info    |
| POST   | '/event/add'     | admin, owner, chief | Create an event    |
| PUT    | '/event/:id' | admin, owner, chief | Update event data    |
| DELETE | '/event/:id' | admin, owner, chief | Delete an event     |
...

## INOUT ENDPOINTS (drop and pick child register)

| METHOD | URL            | AUTH    | FUNCTION                   |
|--------|----------------|---------|----------------------------|
| GET    | '/inout/drops'    | Authenticate user | List all drops     |
| GET    | '/inout/picks'    | Authenticate user | List all picks   |
| POST   | '/inout/drop'     | Authenticate user | Create a drop    |
| POST   | '/inout/pick'     | Authenticate user | Create a pick    |
| PUT    | '/inout/:id' | admin | Update drop or pick data[^1]  |
| DELETE | '/inout/:id' | admin | Delete drop or pick data[^1]    |
...

[^1]: Depends on action selected (drops or picks)