$(document).ready(function() {
    const apiUrl = 'http://localhost:3000';

    function carregarLivros() {
        $.ajax({
            url: `${apiUrl}/livros`,
            method: 'GET',
            success: function(data) {
                const tabelaCorpo = $('#tabela-livros tbody');
                tabelaCorpo.empty();

                data.forEach(livro => {
                    tabelaCorpo.append(`
                        <tr data-id="${livro.id}">
                            <td>${livro.titulo}</td>
                            <td>${livro.autor}</td>
                            <td>${livro.npags}</td>
                            <td>
                                <button class="btn-editar">Editar</button>
                                <button class="btn-excluir">Excluir</button>
                            </td>
                        </tr>
                    `);
                });
            }
        });
    }

    $('#form-livro').on('submit', function(event) {
        event.preventDefault();

        const livroId = $('#livro-id').val();
        const livroData = {
            titulo: $('#titulo').val(),
            autor: $('#autor').val(),
            npags: parseInt($('#npags').val())
        };

        const method = livroId ? 'PUT' : 'POST';
        const url = livroId ? `${apiUrl}/livro/${livroId}` : `${apiUrl}/livro`;

        $.ajax({
            url: url,
            method: method,
            contentType: 'application/json',
            data: JSON.stringify(livroData),
            success: function() {
                carregarLivros(); 
                $('#form-livro')[0].reset();
                $('#livro-id').val('');
            }
        });
    });

    $('#tabela-livros').on('click', '.btn-editar', function() {
        const tr = $(this).closest('tr');
        const livroId = tr.data('id');
        
        const titulo = tr.find('td:eq(0)').text();
        const autor = tr.find('td:eq(1)').text();
        const npags = tr.find('td:eq(2)').text();

        $('#livro-id').val(livroId);
        $('#titulo').val(titulo);
        $('#autor').val(autor);
        $('#npags').val(npags);
    });

    $('#tabela-livros').on('click', '.btn-excluir', function() {
        if (confirm('Tem certeza que deseja excluir este livro?')) {
            const livroId = $(this).closest('tr').data('id');

            $.ajax({
                url: `${apiUrl}/livro/${livroId}`,
                method: 'DELETE',
                success: function() {
                    carregarLivros();
                }
            });
        }
    });

    carregarLivros();
});