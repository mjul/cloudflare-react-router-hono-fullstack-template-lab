-- Migration number: 0002 	 2025-09-18T10:16:40.583Z

INSERT INTO documents (title, date, description, sort_index)
VALUES ('The origin of the Foo', '2025-01-15', 'This work provides a critical review of the origin of the Foo.',
        100101),
       ('The History of Bar', '2025-02-20', 'Acclaimed history of the Bar.', 201937),
       ('Notes on the Foo, Bar and Baz', '2025-03-14', 'Supplementary lecture notes.', 314159);

