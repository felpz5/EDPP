-- -- Criar banco de dados
CREATE DATABASE crud_cursos;

-- -- Conectar ao banco
-- \c crud_cursos;

-- Criar tabela cursos
    CREATE TABLE cursos (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(100) NOT NULL,
        categoria VARCHAR(50) NOT NULL,
        nivel VARCHAR(20) NOT NULL,
        descricao TEXT,
        valor DECIMAL(10, 2) DEFAULT 0.00,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- Inserir dados de exemplo
    INSERT INTO cursos (titulo, categoria, nivel, descricao) VALUES
    ('Introdução à Programação', 'Tecnologia', 'Iniciante', 'Aprenda os conceitos básicos de programação usando Python.', 199.99),
    ('Marketing Digital', 'Marketing', 'Intermediário', 'Domine as estratégias de marketing digital para alavancar seu negócio.', 149.99),
    ('Design Gráfico para Iniciantes', 'Design', 'Iniciante', 'Aprenda os fundamentos do design gráfico usando ferramentas como Photoshop e Illustrator.', 129.99);