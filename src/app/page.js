"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';

export default function Dashboard() {
  const [pacientes, setPacientes] = useState([]);
  const [filteredPacientes, setFilteredPacientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [form, setForm] = useState({
    nome: '',
    data_nascimento: '',
    genero: '',
    numero_carteirinha: '',
    data_primeira_consulta: '',
    cpf: ''
  });
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetchPacientes();
  }, []);

  useEffect(() => {
    const results = pacientes.filter(paciente =>
      paciente.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPacientes(results);
  }, [searchTerm, pacientes]);

  const fetchPacientes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/pacientes');
      setPacientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCpfChange = (e) => {
    setForm({ ...form, cpf: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/pacientes', form);
      fetchPacientes();
      setForm({
        nome: '',
        data_nascimento: '',
        genero: '',
        numero_carteirinha: '',
        data_primeira_consulta: '',
        cpf: ''
      });
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/pacientes/${id}`);
      fetchPacientes();
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
    }
  };

  const openPatientModal = (patient) => {
    setSelectedPatient(patient);
    setShowPatientModal(true);
  };

  const closePatientModal = () => {
    setSelectedPatient(null);
    setShowPatientModal(false);
  };

  const openEditModal = () => {
    setShowEditModal(true);
    setForm(selectedPatient);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/pacientes/${selectedPatient.id}`, form);
      fetchPacientes();
      closeEditModal();
    } catch (error) {
      console.error('Erro ao editar paciente:', error);
    }
  };

  // Função para formatar a data no formato "dd/mm/aaaa"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const pesquisaNome = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Pacientes</h2>
        <input
          type="text"
          placeholder="Buscar paciente"
          value={searchTerm}
          onChange={pesquisaNome}
          className="border p-2 mb-2 w-full"
        />
        <ul>
          {filteredPacientes.map(paciente => (
            <li key={paciente.id} className="mb-2">
              <button className="text-blue-500 cursor-pointer" onClick={() => openPatientModal(paciente)}>{paciente.nome}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 ">
        <div className='bg-cyan-800 p-4'>
        <h1 className="text-2xl font-bold mb-4 text-white">Bem-vindo ao Dashboard de Pacientes</h1>
        <p className=" mb-4 text-white">Selecione um paciente no menu à esquerda para ver os detalhes ou adicione um paciente novo abaixo.</p>
        </div>
        <br></br>
        <div className='p-10'>
        <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="date"
          name="data_nascimento"
          value={form.data_nascimento}
          onChange={handleChange}
          placeholder="Data de Nascimento"
          className="border p-2 mb-2 w-full"
          required
        />
        <select
          name="genero"
          value={form.genero}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
          required
        >
          <option value="">Selecione o Gênero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
        <input
          type="text"
          name="numero_carteirinha"
          value={form.numero_carteirinha}
          onChange={handleChange}
          placeholder="Número da Carteirinha (Opcional)"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="date"
          name="data_primeira_consulta"
          value={form.data_primeira_consulta}
          onChange={handleChange}
          placeholder="Data da Primeira Consulta"
          className="border p-2 mb-2 w-full"
          required
        />
        <InputMask
          mask="999.999.999-99"
          value={form.cpf}
          onChange={handleCpfChange}
        >
          {() => (
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              className="border p-2 mb-2 w-full"
              required
            />
          )}
        </InputMask>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Cadastrar</button>
        </form>
        </div>
      </div>

      {showPatientModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute bg-gray-800 bg-opacity-50 w-full h-full"></div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative z-10">
            <div className="flex justify-between items-center bg-gray-900 text-white px-6 py-4">
              <h2 className="text-lg font-bold">{selectedPatient.nome}</h2>
              <button onClick={closePatientModal} className="text-white">&times;</button>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                <li><span className="font-semibold">Data de Nascimento:</span> {formatDate(selectedPatient.data_nascimento)}</li>
                <li><span className="font-semibold">Gênero:</span> {selectedPatient.genero}</li>
                <li><span className="font-semibold">Número da Carteirinha:</span> {selectedPatient.numero_carteirinha}</li>
                <li><span className="font-semibold">Data da Primeira Consulta:</span> {formatDate(selectedPatient.data_primeira_consulta)}</li>
                <li><span className="font-semibold">CPF:</span> {selectedPatient.cpf}</li>
              </ul>
              <div className="flex justify-end mt-6">
                <button onClick={openEditModal} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-200">Editar</button>
                <button onClick={() => handleDelete(selectedPatient.id)} className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-200">Excluir</button>
                <button onClick={closePatientModal} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition duration-200">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute bg-gray-800 bg-opacity-50 w-full h-full"></div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative z-10">
            <div className="flex justify-between items-center bg-gray-900 text-white px-6 py-4">
              <h2 className="text-lg font-bold">Editar Paciente</h2>
              <button onClick={closeEditModal} className="text-white">&times;</button>
            </div>
            <div className="p-6">
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Nome"
                  className="border p-2 mb-2 w-full"
                  required
                />
                <input
                  type="date"
                  name="data_nascimento"
                  value={form.data_nascimento}
                  onChange={handleChange}
                  placeholder="Data de Nascimento"
                  className="border p-2 mb-2 w-full"
                  required
                />
                <select
                  name="genero"
                  value={form.genero}
                  onChange={handleChange}
                  className="border p-2 mb-2 w-full"
                  required
                >
                  <option value="">Selecione o Gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
                <input
                  type="text"
                  name="numero_carteirinha"
                  value={form.numero_carteirinha}
                  onChange={handleChange}
                  placeholder="Número da Carteirinha (Opcional)"
                  className="border p-2 mb-2 w-full"
                />
                <input
                  type="date"
                  name="data_primeira_consulta"
                  value={form.data_primeira_consulta}
                  onChange={handleChange}
                  placeholder="Data da Primeira Consulta"
                  className="border p-2 mb-2 w-full"
                  required
                />
                <InputMask
                  mask="999.999.999-99"
                  value={form.cpf}
                  onChange={handleCpfChange}
                >
                  {() => (
                    <input
                      type="text"
                      name="cpf"
                      placeholder="CPF"
                      className="border p-2 mb-2 w-full"
                      required
                    />
                  )}
                </InputMask>
                <div className="flex justify-end mt-6">
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-200">Salvar</button>
                  <button onClick={closeEditModal} className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition duration-200">Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

