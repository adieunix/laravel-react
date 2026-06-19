<?php

test('api check endpoint returns json success payload', function (): void {
    $response = $this->getJson('/api/check');

    $response->assertOk();
    $response->assertExactJson([
        'status' => true,
        'message' => 'success',
    ]);
});
