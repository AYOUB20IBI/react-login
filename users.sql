-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 09 déc. 2023 à 17:28
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `testcsrf-app`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Prof. Orion Wehner', 'olangworth@example.org', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', '2WipQJaLtK', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(2, 'Daija Von', 'alex.schuppe@example.net', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', '1T19czP0Fp', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(3, 'Prof. Eva Blick', 'vluettgen@example.net', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', 'ggW0Wh7kuP', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(4, 'Kali Haag', 'shemar48@example.com', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', '0w9pOs8xNi', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(5, 'Ms. Catharine Zboncak', 'fgorczany@example.net', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', 'w4TdWfzOj6', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(6, 'Amos Kuphal', 'imogene.hill@example.net', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', '8O8icEF3Vw', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(7, 'Wanda Schneider', 'dino.hill@example.org', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', 'iEUZlRJVaU', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(8, 'Ubaldo Wolff', 'rice.braxton@example.com', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', 'KQp6l1N2ss', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(9, 'Margret Cronin', 'raul.bartell@example.org', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', 'a990pvJsA6', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(10, 'Garfield Fritsch', 'neva98@example.com', '2023-12-08 13:57:31', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', 'MrkgDoyr3X', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(11, 'Test User', 'test@example.com', '2023-12-08 13:57:32', '$2y$12$iYrrWBx0YO6ImYzcdUrdpusGUsyKBQm.OWknPovVAHTNhvmv8fpum', 'ruF31b1H4e', '2023-12-08 13:57:32', '2023-12-08 13:57:32'),
(12, 'AYOUB', 'ayoubkoko610@gmail.com', NULL, '$2y$12$hjiuMWUraAr0pk70YZRr2O5JWtHjUGMVPYk9iQbSstUPLuU..TV3O', NULL, '2023-12-08 16:03:02', '2023-12-08 16:03:02');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
