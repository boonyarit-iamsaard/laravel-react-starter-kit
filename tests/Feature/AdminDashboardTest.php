<?php

declare(strict_types=1);

use App\Models\User;

uses(Illuminate\Foundation\Testing\RefreshDatabase::class);

test('guests are redirected to the login page', function () {
    $this->get('/admin')->assertRedirect('/login');
});

test('authenticated users can visit the admin dashboard', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/admin')->assertOk();
});
