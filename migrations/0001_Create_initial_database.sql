-- Migration number: 0001 	 2025-09-18T09:50:01.212Z
DROP TABLE IF EXISTS documents;
CREATE TABLE documents (
    -- this makes id an alias for the SQLite built-in rowid column
    document_id INTEGER PRIMARY KEY ASC,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    description DATE NOT NULL,
    sort_index INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
