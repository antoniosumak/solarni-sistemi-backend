CREATE TABLE clients (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    oib INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    county VARCHAR(50) NOT NULL,
    post_code VARCHAR(20) NOT NULL,
    address VARCHAR(100) NOT NULL
    );

CREATE TABLE statuses (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE products (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    price FLOAT NOT NULL,
    quantity INT NOT NULL,
    description TEXT NOT NULL,
    photo BYTEA,
    project_id BIGINT NOT NULL REFERENCES projects(id)
);

CREATE TABLE power_plants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price FLOAT NOT NULL
);

CREATE TABLE projects (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    comment TEXT, 
    particle_number VARCHAR(100) NOT NULL,
    cadastral_municipality VARCHAR(100) NOT NULL,
    client_id BIGINT NOT NULL REFERENCES clients(id),
    status_id BIGINT NOT NULL REFERENCES statuses(id)
);

CREATE TABLE documents (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    document BYTEA,
    project_id BIGINT NOT NULL REFERENCES projects(id) 
);